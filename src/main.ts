import { parser } from './test';
import { formatAST } from './format';

const code = `
struct light {
 float intensity;
 vec3 position;
} lightVar;

struct light2 {
 float intensity;
 vec3 position;
};
`;

const parsed = parser.parse(code);

console.log(formatAST(parsed.topNode));
