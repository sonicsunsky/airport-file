// import request from "@/utils/request";
import axios from "axios";

export const downloadFile = (url, name, mime) => {
  axios
    .get(url, {
      responseType: "blob",
      //服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'，默认是'json'
    })
    .then((res) => {
      if (!res) return;
      console.log("downloadFile:", res);
      let blob = new Blob([res.data], {
        type: mime,
      });
      //application/vnd.ms-excel,zip,pdf,text/plain;charset=UTF-8
      //这里需要根据不同的文件格式写不同的参数
      let eLink = document.createElement("a");
      eLink.download = name; //这里需要自己给下载的文件命名
      eLink.style.display = "none";
      eLink.href = URL.createObjectURL(blob);
      document.body.appendChild(eLink);
      eLink.click();
      URL.revokeObjectURL(eLink.href);
      document.body.removeChild(eLink);
    })
    .catch((err) => {
      console.error(error);
    });
};
