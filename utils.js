function returnFirstDeclarative(block) {
  let firstPeriod = block.indexOf(".")
  return block.slice(0, firstPeriod+1)
}

function returnLastDeclarative(block) {
  //returnLast("This. Here, is a group. Of sentences. find me the last One.")
  //remove the last punctuation, so it reads "...sentences. find me the last One", then get the index of the newest last punctuation, then slice the original block from +2 to get rid of the ". "
  let getBlock = block.slice(0, block.length-1)
  let lastPeriod = getBlock.lastIndexOf(".")
  let sentence = block.slice(lastPeriod+2) //+2 since you
  return sentence
}

function returnFirstSentence(block) {
  let eachSentenceInArray = block.match(/\(?[^\.\?\!]+[\.!\?]\)?/g)
  return eachSentenceInArray[0]
}

function returnLastSentence(block) {
  let eachSentenceInArray = block.match(/\(?[^\.\?\!]+[\.!\?]\)?/g)
  return eachSentenceInArray[eachSentenceInArray.length-1]
}

function returnRandom(block) {
  let eachSentence = block.match(/\(?[^\.\?\!]+[\.!\?]\)?/g)
  let randomInteger = getRandomIntInclusive(0, eachSentence.length)
  return eachSentence[randomInteger]
}

function getRandomIntInclusive(min, max) {
  //helper function for returnRandom
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

// console.log(returnRandom("The story uses the literary rule of three, expressed in this case as a, as the third pig's brick house turns out to be the only one which is adequate to withstand the wolf.[5] Variations of the tale appeared in Uncle Remus: His Songs and Sayings in 1881. The story also made an appearance in Nights with Uncle Remus in 1883, both by Joel Chandler Harris, in which the pigs were replaced by Brer Rabbit. Andrew Lang included it in The Green Fairy Book, published in 1892, but did not cite his source. In contrast to Jacobs's version, which left the pigs nameless, Lang's retelling cast the pigs as Browny, Whitey, and Blacky. It also set itself apart by exploring each pig's character and detailing interaction between them. The antagonist of this version is a fox, not a wolf. The pigs' houses are made either of mud, cabbage, or brick. Blacky, the third pig, rescues his brother and sister from the fox's den after the fox has been defeated."))

