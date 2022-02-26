import React from 'react';
import {WordMatch} from './utils.components';

/**
 * 
 * @param {string[]} titleArr Array of words in a title, some strings have been formatted into JSX
 * @returns {JSX.Element} returns the title as JSX expression
 */
function composeTitleWithJSX(titleArr){
   let title = <> 
   {titleArr.map((item,index)=> <span key={index.toString()}>{item} {' '}</span>)}
 </>
   return title;
}


/**
 * 
 * @param {string} searchText Text to search in photo title
 * @param {Photo} photo Accepts a single photo
 * @returns {Photo[] | null} Returns  photo with formated  words in title that contains searchText if search string is found or returns null if search string does not match any word or substring in a word
 */
function Search(searchText,photo){
    let photoTitle = photo.title;
    /** @type {string[]} */
    let newTitleArray = [];
     /** @type {string[]} */
    const photoTitleToArray = photoTitle.split(' ');
    let foundMatch = false;
    photoTitleToArray.forEach((str)=>{
        const doSearch = str.indexOf(searchText);
        if(doSearch >= 0 && searchText.trim()){
            foundMatch = true;
            newTitleArray.push(<WordMatch>
                {str}
            </WordMatch>)
        }else {
            newTitleArray.push(str);
        }
    })

    if(foundMatch){
        return {...photo,title:composeTitleWithJSX(newTitleArray)}
    }  
}


/**
 * 
 * @param {string} searchText Text to search in photo titles
 * @param {Photo[]} album Array of photos in an album to search
 * @returns {Photo[]} Returns filtered album or photos in an album
 */
function SearchAlbum(searchText,album){

    const searchResult = [];
    album.forEach((photo)=>{
       const result =  Search(searchText,photo);
       if(result){
           searchResult.push(result);
       }
    })

    return searchResult

}
const Utils = {SearchAlbum};
export default Utils;