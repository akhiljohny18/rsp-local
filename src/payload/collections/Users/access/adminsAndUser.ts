import type { Access } from 'payload/types'

import { checkRole } from '../checkRole'

const adminsAndUser: Access = ({ req: { user } }) => {
  if (user) {
    if (checkRole(['admin', 'user'], user)) { // corrected bracket notation here
      return true
    }

    return {
      id: {
        equals: user.id,
      },
    }
  }

  return false
}

export default adminsAndUser
