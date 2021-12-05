import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MainPhoto from './components/MainPhoto/MainPhoto.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Info from './components/Info/Info.jsx';
import Colors from './components/Colors/Colors.jsx'
import { TitleHeader, SearchFlex, RightFlex, DownFlex, Searchbar, ColorSearchbar } from './components/styles/main.js'

function App(props) {
  const [query, setQuery] = useState('');
  const [photos, setPhotos] = useState([{ urls: {
    regular:
    'https://images.unsplash.com/photo-1638550499214-5b0d2994373b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=663&q=80'
  }
}]);
  const [color, setColor] = useState('');
  const [placeholderSearch, setPlaceHolderSearch] = useState('\'Mountains\'')

  const handleSubmit =  (e) => {
    e.preventDefault();
    axios.get(`/query/${query}`)
     .then(data => {
       console.log(data.data);
       setPhotos(data.data);
      })
     .catch(err => console.log(err))
  }

  return (
    <div>
      <TitleHeader>
        <SearchFlex>
      <form onSubmit={handleSubmit}>
        <Searchbar type='text'
        name='query'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholderSearch}/>
        <ColorSearchbar type='text'
        name='query'
        value={color}
        onChange={(e) => setColor(e.target.value)}
        placeholder='#FF8080'/>
        <input type='submit' value='Submit'></input>
      </form>
        </SearchFlex>
      </TitleHeader>
      <RightFlex>
        {console.log('results photos', Object.keys(photos[0]))}
        <MainPhoto
          photoData={photos[0]}
        ></MainPhoto>
        <DownFlex>
          <Colors></Colors>
          <Info></Info>
          <Gallery
          galleryData={photos}
          ></Gallery>
        </DownFlex>
    </RightFlex>
    </div>
  )
}

export default App;