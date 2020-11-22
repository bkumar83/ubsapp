
import * as actions from '../../actions'
import reducer from '../../reducers'

describe('actions', () => {
    it('should create an action to add a todo', () => {
      const pathValue = '/'
      const expectedAction = {
        type: 'SETCURRENTPATH',
        payload: {
            currentPath: '/'
        }
      }
      expect(actions.setCurrentPath(pathValue)).toEqual(expectedAction)
    })
  })

  describe('actions', () => {
    it('should create an action to add a todo', () => {
      const item = '';
      const expectedAction = {
        type: 'STOREITEM',
        payload: {
            selItem: ''
        }
      }
      expect(actions.storeSelItem(item)).toEqual(expectedAction)
    })
  })


  
  describe('ItemList reducer', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual(
        {
            currentpath: '/',
            selItem:null
        }
      )
    })
 

    it('returns the correct state path', () => {
        const action = { type:'SETCURRENTPATH', payload: {
            currentpath: '/'
        } };
        const expectedState = { currentpath: '/', selItem:null};
    
        expect(reducer(undefined, action)).toEqual(expectedState)
      })

      it('returns the correct state item', () => {
        const action = { type:'STOREITEM', payload: {
            selItem: 'Item Details',
            currentpat: '/'
        } };
        const expectedState = { currentpath: '/', selItem:'Item Details'};
    
        expect(reducer(undefined, action)).toEqual(expectedState)
      })
})
