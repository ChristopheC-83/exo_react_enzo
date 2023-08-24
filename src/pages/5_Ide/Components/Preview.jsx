/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { useSelector } from "react-redux";

function Preview() {
  const tabs = useSelector((state) => state.codeUpdater);

  function getCode(lang) {
    return tabs.find((obj) => obj.lang === lang).code;
  }

  const srcDoc = `
    <!doctype html>
<html lang="en">
  <head>
  <style>${getCode("css")}</style>
  </head>
  <body>
  ${getCode("html")}
    <script>${getCode("js")}</script>
  </body>
</html>
    `;
  return (
    <div className="preview">
      {/* iframe est une page dans une page */}
      <iframe srcDoc={srcDoc} sandbox="allow-scripts"></iframe>
    </div>
  );
}

export default Preview;
