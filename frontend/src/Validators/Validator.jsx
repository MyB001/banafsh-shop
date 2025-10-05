import Rules from "./Rules";

export default function Validator(value, validation) {
  const validationResults = []

  for (const validates of validation) {
    
    if (validates.value === Rules.requiredValue) {
        value.trim().length === 0 && validationResults.push(false)
    } else if(validates.value === Rules.minValue) {
        value.trim().length < validates.min && validationResults.push(false)
    } else if(validates.value === Rules.maxValue) {
        value.trim().length > validates.max && validationResults.push(false)
    } 
  }

  if(validationResults.length) {
    return false
  } else {
    return true
  }
}
