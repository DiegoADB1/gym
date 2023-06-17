import axios from "axios"
import config from "../../config.json"

function Table({ tableData }) {
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    const headerConfig = {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("Authorization")
        }
    }

    const handleDelete = async (id) => {
        await axios.delete(config.api.url + "/api/training/" + id, headerConfig)
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Descrição</th>
                    <th scope="col">Timestamp</th>
                    <th scope="col">Excluir</th>
                </tr>
            </thead>
            <tbody>
                {
                    tableData.map((data, key) => {
                        return (
                            <tr key={key}>
                                <td>{data.name}</td>
                                <td>{data.description}</td>
                                <td>{formatDate(data.time)}</td>
                                <td><button className="btn btn-danger" onClick={() => { handleDelete(data.id) }}>Excluir</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
export default Table;
