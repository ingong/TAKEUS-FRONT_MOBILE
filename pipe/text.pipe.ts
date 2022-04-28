export const shortenTextWithDot = ({
  text,
  limit,
  isDotNeed,
}: {
  text: string;
  limit: number;
  isDotNeed: boolean;
}): string => {
  return isDotNeed ? text.slice(0, limit) + '..' : text.slice(0, limit);
};
