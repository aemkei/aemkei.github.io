decoded = '𓁦𓁯𓁲𓀨𓁯𓀽𓁩𓀽𓀲𓀰𓀱𓀱𓀻𓁩𓀭𓀭𓀻𓀩𓁯𓀫𓀽𓁩𓀥𓀶𓀳𓀿𓁩𓀦𓁩𓀯𓀳𓀲𓀦𓀦𓀧𓁟𓀧𓀺𓀧𓁜𓁮𓀧';

console.log(
  eval(
    unescape(
      escape(decoded)
        .split(/%.{9}/)
        .join('%')
    )
  )
);

decoded = '𓁦𓁯𓁲𓀨𓁯𓀽𓁩𓀽𓀲𓀰𓀱𓀱𓀻𓁩𓀭𓀭𓀻𓀩𓁯𓀫𓀽𓁩𓀥𓀶𓀳𓀿𓁩𓀦𓁩𓀯𓀳𓀲𓀦𓀦𓀧𓁟𓀧𓀺𓀧𓁜𓁮𓀧';

console.log(
  eval(
    unescape(
      escape(decoded)
        .split(/%.{9}/)
        .join('%')
    )
  )
);