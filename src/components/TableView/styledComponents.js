import styled from 'styled-components'

export const TableStyle = styled.table`.
    width: 1240px;
  height: 64px;
  margin: 24px 100px 0;
  border: solid 1px #d7dfe9;
  margin-bottom: 30px;
  @media screen and (max-width: 567px) {
    width: 100%;
    height: 34px;
    margin:  0;
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
    font-size: 8px;
    padding: 5px;
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
    width: 104px;
    font-size: 8px;
    padding-left: 8px;
    padding-right: 8px;
  }
`
export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`
