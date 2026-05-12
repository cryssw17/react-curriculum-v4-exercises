import styles from './SnackForm.module.css';
import { useState } from 'react';
import { useEffect } from 'react';

export default function SnackForm({
  addSnack,
  editingSnack,
  cancelEdit,
  updateSnack,
  className,
}) {
  const isEditing = Boolean(editingSnack);
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [touched, setTouched] = useState({ name: false, rating: false }); //tracks fields user has interacted with

  useEffect(() => {
    if (isEditing) {
      setName(editingSnack.name);
      setRating(editingSnack.rating);
    } else {
      setName('');
      setRating('');
    }

    setTouched({ name: false, rating: false });
  }, [editingSnack, isEditing]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!validateName() || !validateRating()) {
      setTouched({ name: true, rating: true });
      return;
    }

    if (isEditing) {
      updateSnack(editingSnack.id, name, rating);
    } else {
      addSnack(name, rating);
      setName('');
      setRating('');
    }
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleRatingChange(event) {
    setRating(event.target.value);
  }

  function handleNameFocus() {
    setTouched((prev) => ({ ...prev, name: true }));
  }

  function handleRatingFocus() {
    setTouched((prev) => ({ ...prev, rating: true }));
  }

  function validateName() {
    return name.trim() !== '';
  }

  function validateRating() {
    return rating.toString().trim() !== '';
  }

  function getNameError() {
    if (validateName() === false && touched.name === true) {
      return 'Snack name is required';
    }
  }

  function getRatingError() {
    if (validateRating() === false && touched.rating === true) {
      return 'Please select a rating';
    }
  }

  const nameError = getNameError();
  const ratingError = getRatingError();

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.form} ${className || ''}`}
    >
      <h3 className={styles['form-title']}>
        {isEditing ? '✏️ Edit Snack' : '➕ Add Snack'}
      </h3>

      <div className={styles['field-container']}>
        <label className={styles['field-label']}>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          className={styles['field-input']}
          placeholder="Enter snack name"
          onChange={handleNameChange}
          onFocus={handleNameFocus}
        />
        {nameError && <div className={styles.error}>{nameError}</div>}
      </div>

      <div className={styles['field-container']}>
        <label className={styles['field-label']}>Rating:</label>
        <input
          type="number"
          name="rating"
          value={rating}
          min="1"
          max="5"
          className={styles['field-input']}
          placeholder="Rate 1-5"
          onChange={handleRatingChange}
          onFocus={handleRatingFocus}
        />
        {ratingError && <div className={styles.error}>{ratingError}</div>}
      </div>

      <div className={styles['button-container']}>
        <button
          type="submit"
          className={`${styles.button} ${styles['submit-button']}`}
        >
          {isEditing ? 'Save' : 'Add'}
        </button>

        {isEditing && (
          <button
            type="button"
            onClick={cancelEdit}
            className={`${styles.button} ${styles['cancel-button']}`}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
