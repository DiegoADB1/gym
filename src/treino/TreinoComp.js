import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormTreino from "./form/FormTreino"
import TreinoPreview from "./form/TreinoPreview"
import Table from "./form/Table"
import axios from "axios";
import config from "../config.json";

function TreinoComp() {
    const navigate = useNavigate()
    const headerConfig = {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("Authorization")
        }
    }
    const [tableData, setTableData] = useState([]);
    const [formInputData, setFormInputData] = useState({
        name: "",
        description: "",
        time: ""
    });

    useEffect(() => {
        const localUser = localStorage.getItem("username")
        if (localUser == undefined) {
            navigate("/login")
            return;
        }

        axios.get(config.api.url + "/api/training", headerConfig)
            .then(res => {
                setTableData(res.data)
            })
    })

    const handleChange = (evnt) => {
        const newInput = (data) => ({
            ...data,
            [evnt.target.name]: evnt.target.value,
        });
        setFormInputData(newInput);
    };

    const handleSubmit = async (evnt) => {
        evnt.preventDefault();



        const response = await axios.post(config.api.url + "/api/training", formInputData, headerConfig)

        const newData = (data) => [...data, response.data];
        setTableData(newData);
        const emptyInput = { name: "", description: "", time: "" };
        setFormInputData(emptyInput);
    };

    return (
        <div className="container" style={{ paddingTop: "50px" }}>
            <div className="row">
                <div className="col-md-6">
                    <FormTreino
                        handleChange={handleChange}
                        formInputData={formInputData}
                        handleSubmit={handleSubmit}
                    />
                </div>
                <div className="col-md-6">
                    <TreinoPreview formInputData={formInputData} />
                </div>
            </div>
            <div className="border p-3 shadow-lg p-3 mb-5 bg-white rounded">
                <Table tableData={tableData} />
            </div>
        </div>

    )
}

export default TreinoComp;