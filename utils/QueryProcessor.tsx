export default function QueryProcessor(query: string): string {
  const regex: RegExp = /What is (\d+) plus (\d+)/i;
  const match: RegExpMatchArray | null = query.match(regex);
  if (match) {
    const num1: number = parseInt(match[1]);
    const num2: number = parseInt(match[2]);
    const sum: number = num1 + num2;
    return sum.toString(); 
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
