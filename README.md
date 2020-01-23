# Pig Latin

#### Javascript Epicodus Exercise at Epicodus, 01/23/2020

#### By **Jiwon Han and Adela Darmansyah**

## Description

A website created with Javascript and HTML where a user can enter a word or sentence that returns Pig Latin. 


### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **The program adds "ay" to single-letter words beginning with a vowel.** | "i" | "iay" |
| **The Program adds "way" to the end for words beginning with a vowel** | "airplane" | "airplaneway" |
| **The Program moves the first consonant and add "ay" to the end.** | "translator" | "ranslatortay" |
| **The Program moves all of the first consecutive consonants to the end, and add "ay" for words beginning with one or more consonants.** | "translator" | "anslatortray" |
| **The Program moves the "u" along with the "q" if the first consonants include "qu"** | "quiz" | "izquay" | 
| **The Program moves "qu" even if they are not the first consonants** | "squeal" | "ealsquay" |
| **The Program treats "y" as a consonant for words beginning with "y"** | "yell" | "ellyay" |
| **The Program takes user input that is case insensitive** | "trAnslAtoR" | "anslatortray" |
| **The Program gives output that capitalizes the first letter that is moved to the end of a word** | "translator" | "anslatorTray" |
| **All rules apply to sentences** | "Pig Latin translator" | "igPay atinLay anslatorTray" |
| **The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels** | "3" | "3" |
| **Special characters will stay at the end of the translated word** | "Chips ahoy!" | "ipsChay hoyWay!" |

## Setup/Installation Requirements

1. Clone this repository.
2. Open pig-latin.html in your preferred browser.

## Known Bugs

* No known bugs at this time.

## Technologies Used

* JavaScript
* jQuery
* HTML
* CSS

## Support and contact details

_Email jiwon1.han@gmail.com or adela.yohana@gmail.com with any questions, comments, or concerns._

### License

*This software is licensed under the MIT license*

Copyright (c) 2020 **_Jiwon Han, Adela Darmansyah_**