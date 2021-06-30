export function downloadFile(url, name) {
  let eLink = document.createElement("a");
  eLink.style.display = "none";
  eLink.href = url;
  eLink.setAttribute("download", name); //设置下载属性 以及文件名
  document.body.appendChild(eLink);
  eLink.click();
  document.body.removeChild(eLink);
}
