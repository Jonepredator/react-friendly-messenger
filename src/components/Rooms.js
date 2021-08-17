const Rooms = ({ currentRoom, setShowListMenu, setCurrentRoom }) => {
   const handleRoomChange = (room) => {
      setCurrentRoom(room);
      setShowListMenu(false);
   };
   return (
      <div className="rooms">
         <h2>Select room</h2>
         <ul>
            <li
               onClick={() => {
                  handleRoomChange("Dance-Topics");
               }}
               className={currentRoom === "Dance-Topics" ? "active" : ""}
            >
               DANCE TOPICS
            </li>
            <li
               onClick={() => {
                  handleRoomChange("Lobby");
               }}
               className={currentRoom === "Lobby" ? "active" : ""}
            >
               LOBBY
            </li>
            <li
               onClick={() => {
                  handleRoomChange("Information");
               }}
               className={currentRoom === "Information" ? "active" : ""}
            >
               INFORMATION
            </li>
            <li
               onClick={() => {
                  handleRoomChange("Games");
               }}
               className={currentRoom === "Games" ? "active" : ""}
            >
               GAMES
            </li>
         </ul>
      </div>
   );
};

export default Rooms;