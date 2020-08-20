import React from 'react';

export const ClickedItemContext = React.createContext("");

export function Provider({ children }) {
  const [clicked_item, setClickedItem] = React.useState("");
  //const [onClick, setState] = React.useState("");
  //console.log('markers: ', markers);

  const clickedItemState = React.useMemo(() => {
    //console.log("first market",markers[0])
    return {
        clicked_item, 
        setClickedItem
    };
  }, [clicked_item, setClickedItem]);

  return (
  <ClickedItemContext value={clickedItemState}>
    {children}
  </ClickedItemContext>
  );
}