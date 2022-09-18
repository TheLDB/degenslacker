// * Script Main File

// * First function: Fetch all casts from monitored users (SELECT * FROM casters)

// * Second function: Push all casts to their respective webhooks

const sampleCast = {
    body: {
      type: 'text-short',
      publishedAt: 1663442814775,
      sequence: 12223,
      username: 'dwr',
      address: '0xC6C0b79d0034A9A44c01c7695EaE26c9A7d23e40',
      data: {
        text: 'recast:farcaster://casts/0x8ce9e0deb5b95087154da2446316bc0a8df314221478450cd87aed58a76d42d5'
      },
      prevMerkleRoot: '0xd44a0b8d78126cfb768a2f485060d4b7e1c812d35e4530fc4717023b2ba7e503'
    },
    merkleRoot: '0x56874c398663e32fc6bcd83ee25937085cf70909607f6102e61a516ad48fb94a',
    signature: '0x00ece8b37a2820f36cf7acf42a69291a5588d315157792171de18439b2593166119eea6ce32d2f1ba96ad51ac54d02450411cb134a4c8a796067c100aba646451c',
    meta: {
      displayName: 'Dan Romero',
      avatar: 'https://res.cloudinary.com/merkle-manufactory/image/fetch/c_fill,f_png,w_256/https://lh3.googleusercontent.com/MyUBL0xHzMeBu7DXQAqv0bM9y6s4i4qjnhcXz5fxZKS3gwWgtamxxmxzCJX7m2cuYeGalyseCA2Y6OBKDMR06TWg2uwknnhdkDA1AA',
      isVerifiedAvatar: true,
      numReplyChildren: 0,
      reactions: { count: 0, type: 'Like', self: false },
      recasts: { count: 0, self: false },
      watches: { count: 0, self: false }
    },
    attachments: { openGraph: [] }
  }

