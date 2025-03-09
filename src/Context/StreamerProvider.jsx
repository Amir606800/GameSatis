import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StreamerContext = createContext(null);

export const StreamerProvider = ({ children }) => {
  const [streamData, setStrmData] = useState([]);
  const [searcInput, setSearchInput] = useState("");
  const [filteredStreamer, setFilteredStream] = useState(streamData);
  useEffect(() => {
    axios
      .get("https://mocki.io/v1/b98a7650-c54c-4574-b032-568b456ba9e4 ")
      .then((res) => setStrmData(res.data.donators))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const searchResults = streamData.filter((item) =>
      item.name.toLowerCase().includes(searcInput.toLowerCase())
    );
    setFilteredStream(searchResults);
  }, [streamData, searcInput]);

  return (
    <StreamerContext.Provider
      value={{
        streamData,
        searcInput,
        setSearchInput,
        filteredStreamer,
        setFilteredStream,
      }}
    >
      {children}
    </StreamerContext.Provider>
  );
};
