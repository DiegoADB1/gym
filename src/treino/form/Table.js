function Table({tableData}){
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric"}
        return new Date(dateString).toLocaleDateString(undefined, options)
      }

    return(
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Descrição</th>
                    <th scope="col">Timestamp</th>
                </tr>
            </thead>
            <tbody>
            {
                tableData.map((data, index)=>{
                    return(
                        <tr key={data.id}>
                            <td>{data.name}</td>
                            <td>{data.description}</td>
                            <td>{formatDate(data.time)}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
  }
  export default Table;
  