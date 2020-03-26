export const getRightText = () => {
  const { time } = getReleaseTimestamp();
  return new Date().getTime() >= time ? 'Acesse agora!' : 'Reserve sua vaga!';
};

export const getReleaseTimestamp = () => {
  const time = new Date('2019-07-05T00:00:00').getTime();
  const remainingTime = time - new Date().getTime();
  return {
    time,
    remainingTime,
  };
};
