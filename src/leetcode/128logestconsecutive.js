var longestConsecutive = function (arr) {
  if (arr.length <= 0) return 0

  let hash = {}

  // STEP1 : MAP MEIN SABKO SEQ INITIATOR ASSUME KRKE, TRUE SET KARO
  for (let elem of arr) {
    // map.set(elem, 1)            // map  bithaa ke, sabko True set kr diya
    hash[elem] = 1 // mtlb, assume yeh kr rhe hum abhi ki
    // harr ek elem, kisi sequence ki suruwaat hai (thats false, we do know that ;)  )
  }

  // STEP2: YEH DEKHO KI, ISSE PEHLE WALA KAHI PRESENT TOH NAHI HAI MAP MEIN
  for (let i in arr) {
    if (hash[arr[i] - 1]) {
      // ab , ARRAY mein loop laga ke yeh dekh rhe ki
      // KYA, isse pehle wla numeric number, Map mein already pada hai ?
      // agar hai, toh YEH TOH SURUWAAT nahi ho skta
      // suruwaat kaise hoga yeh. inbetween wala kuch elem hoyega
      // example: 4 ke liye check kr rhe, KYA 3 map mein pada hai ?
      //          agar hai, mtlb, suruwaat probably 3 hoyega na. 4 toh nahi hoga na suruwaat

      hash[arr[i]] = 0 // hence, agar pada hai, toh isko FALSE set kr do.
    }
  }

  // ab TRUE woh log reh gaye, jo sacchi kisi sequence ki suruwaat hai
  // example :  [1234] [100] [200] yeh sequence bann rhi thi initially,
  //            toh 1->TRUE
  //              100->TRUE
  //              200->TRUE mila hai sacchi ka opne ko.
  //
  //  so sequence intiator sab mil gaye,
  //  ab yeh dekhte hai, ki kaunsa sequence intiator, sabse badaa sequence generate krta hai
  //  lets count

  //STEP3: AB SAB SEQ INITIATORS KI LENGTH CALC KRO

  let maxLen = 1
  for (let elem of arr) {
    if (hash[elem] == 1) {
      // TRUE walo ko liye, sequence ki length dhundhenge

      let seqCount = 1 // sab element pkka se, kisi sequence ke initiator hai yaha ab. so pehle se hi count=1 set kr diya h (asaani ho rha tha aise coding krne mein)
      //console.log(hash[elem + seqCount])
      while (hash[elem + seqCount] >= 0) {
        // jab tak sequence badhta rhe,
        seqCount += 1 // count krte raho
      }

      maxLen = Math.max(maxLen, seqCount) // jab sequence bdhna khatam ho jaaye, tab maxLen ko update kr do (agar seqCount badaa mila apne ko toh )
    }
  }
  return maxLen
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]))
