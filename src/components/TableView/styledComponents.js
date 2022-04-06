import styled from 'styled-components'

export const TableStyle = styled.table`.
  height: 64px;
  margin: 24px 100px 0;
  border: solid 1px #d7dfe9;
  margin-bottom: 30px;
  @media screen and (max-width: 567px) {
    width: 90%;
    height: 34px;
    margin:  0 10px 0 15px;
  }
`

export const ColumnThRow = styled.th`
  width: 84px;
  height: 12px;
  margin: 1px 125px 0 0;
  font-family: 'HKGrotesk';
  font-size: 12px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: 0.12px;
  @media screen and (max-width: 567px) {
    width: 25px;
    height: 10px;
    margin: 0;
    font-size: 6.5px;
    padding: 3px;
  }
`

export const TrRowStyle1 = styled.tr`
  height: 64px;
  width: 1024px;
  margin: 24px 100px 0;
  padding: 24px 34px 23px 68px;
  @media screen and (max-width: 567px) {
    height: 20px;
    width: 50%;
    margin: 0;
    padding: 0;
  }
`

export const TableBodyTr = styled.tr`
  height: 66px;
  margin: 88px 100px 0;
  @media screen and (max-width: 567px) {
    height: 14px;
    font-size: 10px;
    padding: 4px 2px 0 4px;
  }
`

export const TableBodyTd = styled.td`
  width: 204px;
  height: 16px;
  margin: 15px 66px 3px 0;
  font-family: 'HKGrotesk';
  font-size: 12px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: #7e858e;
  padding: 8px 20px 8px 30px;
  border-bottom: solid 1px #d7dfe9;
  background-color: #ffffff;
  @media screen and (max-width: 567px) {
    height: 14px;
    width: 30px;
    font-size: 6px;
    padding-left: 5px;
    padding-right: 0px;
  }
`
export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 767px) {
    margin-top: 15px;
  }
`
export const PaginationButton = styled.button`
   width: 24px;
  height: 24px;
  margin: 0 8px 0 0;
  padding: 4px;
  border-radius: 2px;
  border: solid 1px #d7dfe9;
  background-color: #ffffff;
  cursor:pointer;
}
`
