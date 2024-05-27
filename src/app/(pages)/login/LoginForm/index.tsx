'use client'

import React, { useCallback, useRef } from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'

import { Button } from '../../../_components/Button'
import { Message } from '../../../_components/Message'
import { useAuth } from '../../../_providers/Auth'


import classes from './index.module.scss'
import '../../../styles/login.css'

type FormData = {
  email: string
  password: string
}

const LoginForm: React.FC = () => {
  const searchParams = useSearchParams()
  const allParams = searchParams.toString() ? `?${searchParams.toString()}` : ''
  const redirect = useRef(searchParams.get('redirect'))
  const { login } = useAuth()
  const router = useRouter()
  const [error, setError] = React.useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<FormData>()

  const onSubmit = useCallback(
    async (data: FormData) => {
      try {
        await login(data)
        if (redirect?.current) router.push(redirect.current as string)
        else router.push('/')
      } catch (_) {
        setError('There was an error with the credentials provided. Please try again.')
      }
    },
    [login, router],
  )

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rsp-login-form-container">
      <p>
        {/* <Link href="/admin/collections/users">login to the admin dashboard</Link> */}
        {/* {'.'} */}
      </p>
      <Message error={error} className={classes.message} />

      <div className={classes.formGroup} >
        <label htmlFor="email" className="rsp-email-label">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          className="rsp-login-website"
          {...register('email', { required: 'Email is required' })}
        />
        {errors.email && <p className={classes.errorMessage}>{errors.email.message}</p>}
      </div>

      <div className={classes.formGroup}>
        <label htmlFor="password" className="rsp-password-label">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          className="rsp-login-password"
          {...register('password', { required: 'Password is required' })}
        />
        {errors.password && <p className={classes.errorMessage}>{errors.password.message}</p>}
      </div>

      <Button
        type="submit"
        appearance="primary"
        label={isLoading ? 'Processing' : 'Login'}
        disabled={isLoading}
        className="rsp-login-submit-button mt-4"
      />

      <div>
        <Link href={`/create-account${allParams}`} className='rsp-create-account'>Create an account</Link>

        <Link href={`/recover-password${allParams}`} className='rsp-recover-account'>Recover your password</Link>
      </div>
    </form>
  )
}

export default LoginForm
