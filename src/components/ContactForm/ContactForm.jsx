import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Form, Field, ErrorMessage, Label, Button } from './ContactForm.styled';



const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces.For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .min(2, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),

  number: Yup.string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .min(2, 'Too short')
    .max(10, 'Too long')
    .required('Required'),
});



export const ContactForm = ({ onSave }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={(values, actions) => {
        onSave({
          ...values, id: nanoid(),
        });
        actions.resetForm();
      }}
      validationSchema={ContactSchema}
    >
      <Form>
        <Label>
          Name
          <Field name="name" type="text" />
          <ErrorMessage name="name" component="span" />
        </Label>
        <Label>
          Number
          <Field name="number" />
          <ErrorMessage name="number" component="span" />
        </Label>
        <Button type='submit'>Add contact</Button>
      </Form>
    </Formik>
  );
};



ContactForm.propTypes = {
  onSave: PropTypes.func.isRequired,
};
