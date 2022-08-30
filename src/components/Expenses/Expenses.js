import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYaer, setFilteredYear] = useState("2022");

  const filteredChangeHandler = (seletedYear) => {
    setFilteredYear(seletedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        seleted={filteredYaer}
        onChangeFiltered={filteredChangeHandler}
      />
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
