const calculateBMI = (height: number, weight: number): number => {
  const HEIGHT = height / 100;
  const BMI = (weight / Math.pow(HEIGHT, 2)).toFixed(2);
  return Number(BMI);
};

export default calculateBMI;
