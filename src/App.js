import React, { useState } from "react";
import "./styles.css";

/**
 * concept notes: styling in react
 */

/**
 * concept of hashmap (object as hashmap)
 * O(1) and why we are doing this.
 */
const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "😃": "Smile",
  "😁": "Grin",
  "😆": "Laughing",
  "😅": "Sweating Smile",
  "😂": "Tears of Joy",
  "😮": "Surprised",
  "😥": "Sad but Relieved",
  "😑": "Expressionless",
  "😋": "Savoring Food",
  "😐": "Neutral",
  "😷": "Face with Medical Mask",
  "🙄": "Face with Rolling Eyes",
  "😴": "Sleepy",
  "😙": "Kissing with Smiling Eyes",
  "😍": "Heart Eyes",
  "🤩": "Star-Struck",
  "🥰": "Heart with Arrow",
  "🤯": "Mind Blown",
  "😛": "Stuck-Out Tongue",
  "🤪": "Zany Face",
  "😨": "Fearful",
  "😰": "Anxious",
  "😒": "Unamused",
  "😓": "Cold Sweat",
  "🥺": "Pleading Face",
  "😫": "Tired Face",
  "😵": "Dizzy Face",
  "😤": "Angry",
  "😪": "Sleepy Face",
  "😖": "Confounded Face",
};

/**
 * Bonus feature
 * converting an object to array of keys
 */
const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState(""); /** concept 2 is useState */
  const [meaning, setMeaning] = useState("translation will appear here..");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    /** concept 3 is onchange */
    <div className="App">
      <h1>Emojipedia</h1>
      <p>
        {" "}
        you can either search an emoji or click on the emojis below to find
        its name
      </p>
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={"Search your emoji"}
        style={{
          padding: "1em",
          minWidth: "80%",
        }}
      />
      <h2> {emoji} </h2> {/** Concept 1: JSX */}
      <h3> {meaning} </h3> {/** how much part is re-rendered. */}
      {
        /** Bonus feature; if time permmits */
        /**
         * concepts to cover: mapping a list
         * click handler on list item
         */
        emojis.map((emoji) => (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {" "}
            {emoji}{" "}
          </span>
        ))
      }
    </div>
  );
}
