const AVATAR_URL = `https://api.adorable.io/avatars/128`;

export default [
  {
    type: `genre`,
    genre: `rock`,
    answers: [{
      src: `http://ia800702.us.archive.org/33/items/smz2011-10-02.atp_acidjack/tsmzmo2011-10-01atp_acidjack-06.ogg`,
      genre: `rock`,
    }, {
      src: `http://ia902303.us.archive.org/14/items/abird2002-10-31.shnf/abird2002-10-31t09.ogg`,
      genre: `blues`,
    }, {
      src: `http://ia800303.us.archive.org/18/items/ac2009-06-12.u89i/ac2009-06-12.u89i.16bit-t02.ogg`,
      genre: `jazz`,
    }, {
      src: `http://ia800205.us.archive.org/3/items/another007/01-allthelivingandthedead-IntheMoon.ogg`,
      genre: `rock`,
    }],
  },
  {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    answers: [{
      picture: `${AVATAR_URL}/A`,
      artist: ` Johnnie Walker`,
    }, {
      picture: `${AVATAR_URL}/AB`,
      artist: `Jack Daniels`,
    }, {
      picture: `${AVATAR_URL}/AC`,
      artist: `Jim Beam`,
    }],
  }
];
