function App() {
  return (
    <div
      style={{
        border: "solid 2px black",
        borderRadius: 20,
        overflow: "hidden",
      }}
    >
      <div
        style={{ display: "flex", backgroundColor: "#311000", color: "white" }}
      >
        <div
          style={{
            width: "fit-content",
            padding: 10,
          }}
        >
          <img width={120} src="./logo.png" alt="" />
        </div>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: 54, margin: 0, padding: 0 }}>
            RAMAERA INDUSTRIES LTD
          </p>
          <p style={{ fontSize: 24, margin: 0, padding: 0 }}>
            CIN No. U74110UP2022PLC168553
          </p>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                border: "1px solid white",
                width: "fit-content",
                padding: "4px 10px",
                fontSize: 24,
              }}
            >
              PAYMENT RECIEPT
            </p>
          </div>
        </div>
        <div
          style={{
            width: 200,
            marginLeft: "auto",
            marginTop: "auto",
            padding: 10,
          }}
        >
          <div style={{ borderBottom: "2px solid white", marginBottom: 10 }}>
            Reciept Sr. No.
          </div>
          <div style={{ borderBottom: "2px solid white", marginBottom: 10 }}>
            Date
          </div>
        </div>
      </div>
      <div style={{}}>
        <div style={{ fontSize: 20 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "2px solid black",
              marginLeft: 20,
              marginRight: 20,
              marginTop: 10,
            }}
          >
            <p style={{ margin: 5 }}>Received from:</p>
            <p style={{ margin: 5, paddingRight: 400 }}>identity no.</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "2px solid black",
              marginLeft: 20,
              marginRight: 20,
              marginTop: 10,
            }}
          >
            <p style={{ margin: 0, marginBottom: 50 }}>Amount:</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "2px solid black",
              marginLeft: 20,
              marginRight: 20,
              marginTop: 10,
              padding: 5,
            }}
          >
            Amount paid for:
            <label>
              Basic subscription
              <input type="checkbox" />
            </label>
            <label>
              30% Netprofit sharing
              <input type="checkbox" />
            </label>
            <label>
              Industrial project
              <input type="checkbox" />
            </label>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "2px solid black",
              marginLeft: 20,
              marginRight: 20,
              marginTop: 10,
              padding: 5,
            }}
          >
            Payment source:
            <label>
              Cheque
              <input type="checkbox" />
            </label>
            <label>
              UPI
              <input type="checkbox" />
            </label>
            <label>
              Cash deposit
              <input type="checkbox" />
            </label>
            <label>
              Bank tarnsfer
              <input type="checkbox" />
            </label>
            <label>
              Other
              <input type="checkbox" />
            </label>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "2px solid black",
              marginLeft: 20,
              marginRight: 20,
              marginTop: 10,
            }}
          >
            <p style={{ margin: 5 }}>UTR No./Transaction No.</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "2px solid black",
              marginLeft: 20,
              marginRight: 20,
              marginTop: 10,
            }}
          >
            <p style={{ margin: 5 }}>
              Recieved By{" "}
              <span style={{ fontWeight: "bold", marginLeft: 200 }}>
                RAMAERA INDUSTRIES LTD.(Account Dept.)
              </span>
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "2px solid black",
              marginLeft: 20,
              marginRight: 20,
              marginTop: 10,
            }}
          >
            <p style={{ margin: 5 }}>Agency Code</p>
          </div>
        </div>
      </div>
      <div
        style={{
          fontSize: 32,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 0,
          flexDirection: "column",
          margin: 20,
          color: "white",
          borderRadius: 20,
          backgroundColor: "#311000",
          padding: 10,
        }}
      >
        <p style={{ margin: 0, padding: 0 }}>
          Address: H150, Ground Floor, Sector 63, Noida, Uttar Pradesh 201301
        </p>
        <p style={{ margin: 0, padding: 0 }}>GST No. 09AAMCR0782R1ZF </p>
      </div>
    </div>
  )
}

export default App
