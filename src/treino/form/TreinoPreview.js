function TreinoPreview({ formInputData }) {
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric"}
        return new Date(dateString).toLocaleDateString(undefined, options)
      }

    return (
      <div className="container">
        <div className="row border p-2 shadow-lg p-3 mb-5 bg-white rounded">
          <p className="border mt-1">
            <span className="fw-bold">Nome:</span>&nbsp;
            <span className="text-muted">{formInputData.name}</span>
          </p>
          <p className="border mt-1">
            <span className="fw-bold">Descrição:</span>&nbsp;
            <span className="text-muted">{formInputData.description}</span>
          </p>
          <p className="border mt-1">
            <span className="fw-bold">Dia e hora:</span>&nbsp;
            <span className="text-muted">{formInputData.time == "" ? "" : formatDate(formInputData.time)} </span>
          </p>
        </div>
      </div>
    );
  }
  
  export default TreinoPreview;
  