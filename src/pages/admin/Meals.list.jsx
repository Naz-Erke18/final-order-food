/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react'
import { styled } from '@mui/system'
import { useDispatch } from 'react-redux'
import styledComponent from 'styled-components'
import { TextField } from '@mui/material'
import ButtonMui from '../../components/UI/ButtonMui'
import { deleteMeals, editMeals } from '../../store/meals/meals.thunks'

const MealsList = ({ meal, mealName, price, description }) => {
  const dispatch = useDispatch()
  const [edit, setEdit] = useState(false)
  const [saveNewMeal, setSaveNewMeal] = useState('')
  const [saveNewDescription, setSaveNewDescription] = useState('')
  const [saveNewPrice, setSaveNewPrice] = useState('')

  const saveMealChangeHandler = (e) => {
    setSaveNewMeal(e.target.value)
  }
  const saveDescriptionChangeHandler = (e) => {
    setSaveNewDescription(e.target.value)
  }

  const savePriceChangeHandler = (e) => {
    setSaveNewPrice(+e.target.value)
  }
  const deleteMeal = (id) => {
    dispatch(deleteMeals(id))
  }

  const saveMeal = (id) => {
    const editMeal = {
      title: saveNewMeal,
      price: saveNewPrice,
      description: saveNewDescription,
      id,
    }

    dispatch(editMeals(editMeal))

    setEdit(false)
  }

  const editMeal = () => {
    setEdit(true)
    setSaveNewMeal(mealName)
    setSaveNewPrice(price)
    setSaveNewDescription(description)
  }
  return (
    <Container>
      <ListContainer>
        {edit ? (
          <SaveEditConteiner>
            <TextField onChange={saveMealChangeHandler} value={saveNewMeal} />
            <TextFieldStyled
              onChange={saveDescriptionChangeHandler}
              value={saveNewDescription}
            />
            <TextField onChange={savePriceChangeHandler} value={saveNewPrice} />
            <ButtonsStyledContainer onClick={() => saveMeal(meal._id)}>
              Save
            </ButtonsStyledContainer>
          </SaveEditConteiner>
        ) : (
          <>
            <MealNameStyle>{mealName}</MealNameStyle>
            <PriceStyle>${price}</PriceStyle>
            <DescriptionStyle>{description}</DescriptionStyle>
            <BtnsStyled>
              <ButtonsStyledContainer onClick={() => deleteMeal(meal._id)}>
                delete
              </ButtonsStyledContainer>
              <ButtonsStyledContainer onClick={editMeal}>
                Edit
              </ButtonsStyledContainer>
            </BtnsStyled>
          </>
        )}
      </ListContainer>
    </Container>
  )
}

export default MealsList

const SaveEditConteiner = styledComponent.div`

  display:flex;
  flex-direction:column;

`

const BtnsStyled = styledComponent.div`
display:flex;
gap:1rem;
padding-top:2rem;

`
const ButtonsStyledContainer = styled(ButtonMui)(({ theme }) => ({
  '&': {
    color: theme.palette.primary.contrastText,
    background: theme.palette.primary.main,
  },
}))

const DescriptionStyle = styledComponent.li`
width:60%;
font-size:16px;
  font-weight:700;
`

const Container = styledComponent.div`
  width:80vw;
  margin: 0 auto;
  padding:2rem;
  display: flex;
  list-style: none;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(214, 214, 214, 1);
  background-color: #ffff;
  :last-child() {
    border: none;
  }
`
const ListContainer = styledComponent.div`
display:flex;
flex-direction:column;
gap:10px;
  margin-bottom: 20px;
  p {
    font-style: italic;
    color: #222222;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin: 0;
  }
  :last-child {
    margin-bottom: 0;
  }
`
const MealNameStyle = styledComponent.h4`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #222222;
  margin: 0;
  margin-top: 4px;
`

const PriceStyle = styledComponent.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #ad5502;
  margin-top: 4px;
 
`

const TextFieldStyled = styled(TextField)(() => ({
  '&': {
    margin: '1rem 0',
  },
}))
