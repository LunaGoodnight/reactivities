import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const FormBlockWrapper = styled.div`
  //width: 100%;
  //margin: 1rem 0;
  //background: #fff;
  width: 28%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    width: 100%;
    padding: 1rem;
  }
`;

const ResetButton = styled.button`
  background: lightgray;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 8px;

  button {
    padding: 1rem 0;
    flex: 0 0 calc(50% - 4px);
  }
`;

export const ActivityForm = () => {
  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState<Date | undefined>();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [venue, setVenue] = useState("");
  const [isShowDatePicker, setIsShowDatePicker] = useState(false);
  const handleSubmit = async () => {
    const apiUrl = `${process.env.REACT_APP_API_URL}/Activities`;
    const data = {
      id: uuid(),
      title,
      date,
      city,
      category,
      description,
      venue,
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response) {
        const final = response.json();
        console.log({ final });
      }
    } catch (e) {
      console.log({ e });
    }
  };
  const handleSetDate = (data: any) => {
    if (data) {
      setDate(data);
    }

    setIsShowDatePicker(false);
  };

  let footer = <p>Please pick a day.</p>;
  if (date) {
    footer = <p>You picked {format(date, "PP")}.</p>;
  }
  return (
    <FormBlockWrapper>
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        type="button"
        onClick={() => setIsShowDatePicker((prev) => !prev)}
      >
        Select Date
      </button>
      {isShowDatePicker && (
        <DayPicker
          mode="single"
          selected={date}
          onSelect={handleSetDate}
          footer={footer}
        />
      )}

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Venue"
        value={venue}
        onChange={(e) => setVenue(e.target.value)}
      />
      <ButtonRow>
        <ResetButton type="button">Reset</ResetButton>
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </ButtonRow>
    </FormBlockWrapper>
  );
};
