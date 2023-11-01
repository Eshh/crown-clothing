import {
  BackgroundImage,
  DirectoryItemContainer,
  Body,
} from "./directory-item.styles";

const DirectoryItem = ({ category: { title, imageUrl } }) => {
  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body to={"shop/" + title}>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
