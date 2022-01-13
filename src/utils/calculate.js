export function calculate(checkedModel, checkedEngine, checkedGearbox, checkedColor){
    let summary = 0;
    if(checkedModel) summary = summary + checkedModel.price;
    if(checkedEngine) summary = summary + checkedEngine.price;
    if(checkedGearbox) summary = summary + checkedGearbox.price;
    if(checkedColor) summary = summary + checkedColor.price;
    return summary;
  }