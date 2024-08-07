import { ExternalTokenizer } from '@lezer/lr';
import { untilCommentClose } from './test.terms';

export const untilCommentCloseToken = new ExternalTokenizer(
  (input, stack) => {
    while (true) {
      // */
      const v = input.next;
      if (v === 42 && input.peek(1) === 47) {
        return input.acceptToken(untilCommentClose, 2);
      }
      input.advance();
    }
  },
);
