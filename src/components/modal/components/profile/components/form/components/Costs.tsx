import React from 'react';
import styles from '../Form.module.scss';

import { useFormContext } from 'react-hook-form';

import { Data } from 'components/modal/components/profile/Profile';

export const Costs: React.FC = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<Data>();

  const display = watch('costs.display');
  const min = watch('costs.min');
  const max = watch('costs.max');

  return (
    <div className={`${styles.form_grid} ${styles.form_grid_mid}`}>
      <div className={styles.form_col}>
        <span className={styles.form_tag}>
          単価&nbsp;
          <input type='radio' id='costsDisplay1' value='private' {...register('costs.display')} />
          <input type='radio' id='costsDisplay2' value='public' {...register('costs.display')} />
          {display === 'public' ? (
            <label className={styles.form_tag_display} htmlFor='costsDisplay1'>
              ※表示したくありませんか？
            </label>
          ) : (
            <label className={styles.form_tag_display} htmlFor='costsDisplay2'>
              ※単価を入力する
            </label>
          )}
        </span>

        {display === 'public' ? (
          <>
            <div className={`${styles.form_grid} ${styles.form_grid_costs}`}>
              <div className={styles.item}>
                <input
                  placeholder='最小'
                  className={`${styles.form_input} ${styles.form_input_center} ${
                    errors.costs?.min && styles.form_input_error
                  }`}
                  type='number'
                  {...register('costs.min', {
                    pattern: {
                      value: /^\d/,
                      message: '半角数字で入力してください',
                    },
                    maxLength: {
                      value: 3,
                      message: '3文字以内で入力してください',
                    },
                  })}
                />
              </div>

              <span className={styles.form_mark}>〜</span>

              <div className={styles.item}>
                <input
                  placeholder='最大'
                  className={`${styles.form_input} ${styles.form_input_center} ${
                    Number(min || 0) >= Number(max || 0) &&
                    errors.costs?.max?.type &&
                    styles.form_input_error
                  }`}
                  type='number'
                  {...register('costs.max', {
                    required: {
                      value: true,
                      message: '最大値を入力してください',
                    },
                    pattern: {
                      value: /^\d/,
                      message: '半角数字で入力してください',
                    },
                    maxLength: {
                      value: 3,
                      message: '3文字以内で入力してください',
                    },
                    validate: {
                      max: (max) => Number(max || 0) > Number(min || 0),
                    },
                  })}
                />
              </div>
            </div>

            {errors?.costs?.min?.message && (
              <span className={styles.form_error}>{errors.costs.min.message}</span>
            )}

            {errors?.costs?.max?.message && (
              <span className={styles.form_error}>{errors.costs.max.message}</span>
            )}

            {max && Number(min || 0) >= Number(max || 0) && errors?.costs?.max?.type === 'max' && (
              <span className={styles.form_error}>正しい数値を入力してください</span>
            )}
          </>
        ) : (
          <div className={styles.form_select}>
            <select
              className={`${styles.form_input} ${errors.costs?.type && styles.form_input_error}`}
              {...register('costs.type', {
                required: {
                  value: true,
                  message: '項目を選択してください',
                },
              })}>
              <option value={'応談'}>応談</option>
              <option value={'内容次第'}>内容次第</option>
            </select>

            {errors?.costs?.type?.message && (
              <span className={styles.form_error}>{errors.costs.type.message}</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
