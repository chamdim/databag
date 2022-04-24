import { useEffect, useState, useRef } from 'react';

export function useArticleContext() {
  const [state, setState] = useState({
    token: null,
    revision: 0,
  });

  useEffect(() => {
  }, []);

  const updateState = (value) => {
    setState((s) => ({ ...s, ...value }))
  }

  const actions = {
    setToken: (token) => {
      updateState({ token });
    },
    setRevision: async (revision) => {
      updateState({ revision });
    },
  }

  return { state, actions }
}


