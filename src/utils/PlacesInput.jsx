import PlacesAutocomplete, {geocodeByAddress} from "react-places-autocomplete";
import Loading from "../shared/Loading";
import {FaLocationDot} from "react-icons/fa6";

const PlacesInput = ({value, onChange, placeholder}) => {
  const handleSelect = async (address) => {
    onChange(address);

    try {
      const results = await geocodeByAddress(address);
      if (!results || !results[0] || !results[0].geometry) {
        console.error("No results found for this address");
        return;
      }
      

     
    } catch (err) {
      console.error(err);
    }
  };

  const searchOptions = {
    componentRestrictions: {country: "au"},
  };

  return (
    <PlacesAutocomplete
      value={value}
      onChange={onChange}
      onSelect={handleSelect}
      searchOptions={searchOptions}
    >
      {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
        <div style={{position: "relative"}}>
          <input
            {...getInputProps({
              placeholder: placeholder || "Enter address",
              className: "input-class",
            })}
            required
          />
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              zIndex: 50,
              background: "#fff",
              border: "1px solid #ccc",
            }}
          >
            {loading && <Loading />}
            {suggestions.map((s, i) => {
              const {key, ...rest} = getSuggestionItemProps(s);
              return (
                <div
                  key={i}
                  {...rest}
                  style={{
                    padding: "8px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    fontSize: "15px",
                    borderBottom: "1px solid #DDDDDD",
                  }}
                >
                  <FaLocationDot /> {s.description}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
};

export default PlacesInput;
