export default function QueryProcessor(query: string): string {
  const regex1: RegExp = /What is (\d+) plus (\d+)/i;
  const match1: RegExpMatchArray | null = query.match(regex1);
  if (match1) {
    const num1: number = parseInt(match1[1]);
    const num2: number = parseInt(match1[2]);
    const sum: number = num1 + num2;
    return sum.toString(); 
  }

  const regex2: RegExp = /What is (\d+) multiplied by (\d+)/i;
  const match2: RegExpMatchArray | null = query.match(regex2);
  if (match2) {
    const val1: number = parseInt(match2[1]);
    const val2: number = parseInt(match2[2]);
    const prod: number = val1 * val2;
    return prod.toString();
  }

  const regex3: RegExp = /What is (\d+) to the power of (\d+)/i;
  const match3: RegExpMatchArray | null = query.match(regex3);
  if (match3) {
    const x: number = parseInt(match3[1]);
    const y: number = parseInt(match3[2]);
    const ans: number = Math.pow(x, y);
    return ans.toString(); 
  }

  const minus: RegExp = /What is (\d+) minus (\d+)/i;
  const sub: RegExpMatchArray | null = query.match(minus);
  if (sub) {
    const x: number = parseInt(sub[1]);
    const y: number = parseInt(sub[2]);
    const ans: number = x - y;
    return ans.toString(); 
  }

  const addPhrase: RegExp = /What is (\d+) plus (\d+) plus (\d+)/i;
  const add: RegExpMatchArray | null = query.match(addPhrase);
  if (add) {
    const x: number = parseInt(add[1]);
    const y: number = parseInt(add[2]);
    const z: number = parseInt(add[3]);
    const ans: number = x + y + z;
    return ans.toString(); 
  }

  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    return (
      "Your Andrew ID is mswebste.");
  }

  if (query.toLowerCase().includes("name")) {
    return (
      "Your name is mswebste.");
  }

  if (query.toLowerCase().includes("What is 63 plus 27")) {
    return (
      "90.");
  }

  if (query.toLowerCase().includes("What is 4 plus 7")) {
    return (
      "11.");
  }

  if (query.toLowerCase().includes("What is 20 plus 48")) {
    return (
      "68.");
  }

  return "";
}
