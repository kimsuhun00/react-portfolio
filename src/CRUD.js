export const firebase_board_list = () =>{
     return (dispatch) => {
          return firestore.collection('boards').orderBy("brddate", "desc").get() .then((snapshot) => {
            var rows = []; snapshot.forEach((doc) => {
                var childData = doc.data(); childData.brddate = dateFormat(childData.brddate, "yyyy-mm-dd"); rows.push(childData); 
            }); dispatch(board_list(rows)); 
        }); 
    } 
}
