import styled from 'styled-components'

export const PortalContainer = styled.div`
  height: 1024px;
  padding: 0 0 128px;
`
export const ObservationHeading = styled.h1`
  width: 425px;
  height: 40px;
  margin: 48px 87px 10px 100px;
  font-family: 'HKGrotesk';
  font-size: 32px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  color: #0b69ff;
  @media screen and (max-width: 567px) {
    width: 300px;
    height: 25px;
    font-size: 22px;
    margin: 14px 20px 0 0px;
  }
`

export const SwitchComponentButton = styled.button`
  color: #ffffff;
  background-color: blue;
  border: 0;
  border-radius: 6px;
  font-size: 12px;
  height: 25px;
  width: 60px;
  cursor: pointer;
`
export const SwitchContainer = styled.div`
  text-align: right;
  margin-right: 30px;
`
export const FilterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const FilterText = styled.p`
  width: 40px;
  height: 16px;
  margin: 24px 104px 24px 8px;
  font-family: 'HKGrotesk';
  font-size: 12px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: 0.12px;
  color: #171f46;
`
