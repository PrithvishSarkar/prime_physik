import CustomError from "../customError.js";
import type RequestBodyType from "./interface/editExerciseInterface.js";

interface ReturnValueType {
  equipments?: string[];
  preparation?: string;
  instructions?: string[];
  thumbnailUrl?: string;
}

const validateEditExerciseInput = (
  reqBody: RequestBodyType
): ReturnValueType => {
  const {equipments: eqp, preparation: prep, instructions: ins, thumbnailUrl: img } = reqBody;
  const returnValue: ReturnValueType = {};

  if (!eqp && !prep && !ins && !img)
    throw new CustomError("Null Values Not Allowed.", 400);

  if (eqp) returnValue.equipments = eqp;
  if (prep) returnValue.preparation = prep;
  if (ins) returnValue.instructions = ins;
  if (img) returnValue.thumbnailUrl = img;

  return returnValue;
};

export default validateEditExerciseInput;
