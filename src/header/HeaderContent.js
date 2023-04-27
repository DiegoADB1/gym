function HeaderContent(props) {
  return (
  <div style={{color: "white", marginRight: 100,}}>
    <h1 className="text-uppercase fw-bolder" style={{fontSize: 50,}}>
      {props.name}
    </h1>
  </div>
  );
}

export default HeaderContent;
