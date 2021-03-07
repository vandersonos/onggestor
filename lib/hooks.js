import { useEffect } from 'react'
import Router from 'next/router'
import useSWR from 'swr'

const fetcher = (url) =>
  fetch(url)
    .then((r) => r.json())
    .then((data) => {
      return data
    })

export function useUser({ redirectTo, redirectIfFound } = {}) {
  const { data, error } = useSWR('/api/users/session', fetcher)
  const user = data?.user || null
  const finished = Boolean(data)
  const hasUser = Boolean(user)

  useEffect(() => {
    if (!redirectTo || !finished) return
    if (
      // If redirectTo is set, redirect if the user was not found.
      (redirectTo && !redirectIfFound && !hasUser) ||
      // If redirectIfFound is also set, redirect if the user was found
      (redirectIfFound && hasUser)
    ) {
      Router.push(redirectTo)
    }
  }, [redirectTo, redirectIfFound, finished, hasUser])

  return error ? null : user
}
export async function getUsers(filters) {
  const resposta = { users: [], error: null }
  try {
    const res = await fetch('/api/users/?filters=' + JSON.stringify(filters), {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })

    if (res.status !== 200) {
      throw await res.text()
    }
    resposta.users = await res.json()

  } catch (error) {
    resposta.error = error
  }
  return resposta
}
export async function activeUser(id) {
  try {
    const res = await fetch('/api/users/active/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: id
      })
    })
    if (await res.status == 200) {
      return true
    }
  } catch (error) {
    return false
  }
}
export async function getUnits(filters) {
  const resposta = { units: [], error: null }
  try {
    const res = await fetch('/api/units/?filters=' + JSON.stringify(filters), {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })

    if (res.status !== 200) {
      throw await res.text()
    }
    resposta.units = await res.json()

  } catch (error) {
    resposta.error = error
  }
  return resposta
}
export async function activeUnit(id) {
  try {
    const res = await fetch('/api/units/active/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: id
      })
    })
    if (await res.status == 200) {
      return true
    }
  } catch (error) {
    return false
  }
}
