function FromTreino({ handleChange, formInputData, handleSubmit }) {
    return (
        <div className="form-row row text-center justify-content-center border p-3 shadow-lg p-3 mb-5 bg-white rounded">
            <form onSubmit={handleSubmit}>
                <div className="col">
                    <input
                        placeholder="Digite o nome do treino"
                        type="text"
                        name="name"
                        className="form-control"
                        required
                        value={formInputData.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="col">
                    <input
                        placeholder="Digite a descrição"
                        type="text"
                        name="description"
                        className="form-control"
                        required
                        value={formInputData.description}
                        onChange={handleChange}
                    />
                </div>
                <div className="col">
                    <input
                        placeholder="Digite a data do treino"
                        type="datetime-local"
                        name="time"
                        className="form-control"
                        required
                        value={formInputData.time}
                        onChange={handleChange}
                    />
                </div>


                <button type="submit" className="btn btn-primary w-100">Criar treino</button>
            </form>
        </div>
    );
}

export default FromTreino;

