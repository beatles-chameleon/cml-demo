

export default function richHandle(richData) {
  let richConf = richData.rich_message,
    richTexts = richData.message.split('');
  //切割文本
  richTexts = richTexts.map(item => {
    return {
      text: item,
      index: -1
    }
  });
  // 过滤错误配置
  richConf = richConf.filter(item => {
    let { start, end } = item;
    start = parseInt(start, 10);
    end = parseInt(end, 10);
    return !isNaN(start) && !isNaN(end) && start <= end;
  })
  // 遍历获取文本对应样式index
  richConf.forEach((item, index) => {
    let { start, end } = item;
    start = parseInt(start, 10);
    end = parseInt(end, 10);
    start = start < 0 ? 0 : start;
    end = end > richTexts.length - 1 ? richTexts.length - 1 : end;
    for (let i = start; i <= end; i++) {
      richTexts[i].index = index;
    }
  })
  let start = 0, end = richTexts.length;
  let richList = [];
  while (start < end) {
    let i = start;
    let rIndex = richTexts[i].index;
    let conf = rIndex === -1 ? null : richConf[rIndex];
    let ri = {
      font_size: conf && conf.font_size,
      color: conf && conf.color,
      text: ''
    }
    for (; i < end; i++) {
      if (richTexts[i].index !== rIndex) {
        break;
      }
      ri.text += richTexts[i].text;
    }
    richList.push(ri);
    start = i;
  }

  return richList;
}