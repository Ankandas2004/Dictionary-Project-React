const ListDetails = ({ result }) => {
  const { word, phonetics, meanings} = result;
  
  function playAudio() {
    try{
        let audio = new Audio(phonetics[0].audio);
        audio.play();
      }
    catch (e){
        console.log({ e });
      }
  }
  
  return (
    <div className="card mt-20">
      <div className="p-20">
        <h3>Word:- {word}</h3>
        <div className="pl-20">
            <p className="btn btn-primary"  onClick={playAudio}>
              {" "}
              play audio{" "}
            </p>
        </div>
        <br></br>
          <p className="pl-20"><h3>-:Parts of Speech:-</h3>{meanings[0].partOfSpeech}</p>
          <br></br>
          <p className="pl-20"> <h3>-:Phonetics:-</h3>{phonetics[0].text}</p>
          <br></br>
  
        <div>
          <h3>-:Meaning:-</h3>
          <p>{meanings[0].definitions[0].definition}</p>
          <br></br>
        </div>
  
          <div>
              <h2>-:Synonyms:-</h2>
              <p>
                  {meanings[0].synonyms.map((item, index) => {
                  return <p key={index}>{item}</p>;
                  })}
              </p>
              <br></br>
          </div>
          <div>
              <h2>-:Antonyms:-</h2>
              <p>
                  {meanings[0].antonyms.map((item, index) => {
                  return <p key={index}>{item}</p>;
                  })}
              </p>
          </div>
      </div>
    </div>
    );
  };
  
  export default ListDetails;