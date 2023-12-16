import "@/app/styles/CurrentPage.scss";

function CurrentPage({ page }) {
  return (
    <div className="current-page-div">
      <div className="current-page-bg"></div>

      <div className="current-page-text-div">
    
        <h1>{page}</h1>
        <h2>{"Home  /  " + page}</h2>
      </div>
    </div>
  );
}

export default CurrentPage;
