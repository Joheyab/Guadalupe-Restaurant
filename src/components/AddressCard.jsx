import "../css/AddressCard.css"
export function AddressCard({
  phone,
  street,
  city,
  state,
  zipCode,
  country,
  address,
}) {
  return (
    <>
      <div className="address-card">
        <h1>Address</h1>
        <img src="src\images\Google_Maps.webp" className="address-logo"></img>
        <div className="address">
          <span>{`Phone number: (208) ${phone}`}</span>
          <span>{`Street: ${street}`}</span>
          <span>{`City: ${city}`}</span>
          <span>{`State: ${state}`}</span>
          <span>{`Zipcode: ${zipCode}`}</span>
          <span>{`Country: ${country}`}</span>
          <span>{`Address: ${address}`}</span>
        </div>
      </div>
    </>
  );
}
