import { ClassNameProps } from '@/types/props.ts';
import { cn } from '@/helpers/cn.ts';

export default function Logo({ className }: { className: ClassNameProps }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1500 1000"
      className={cn(className)}
    >
      <image href="/img/bicycle.png" height="735" width="940">
        <animateMotion
          dur="10s"
          repeatCount="indefinite"
          path="m 20 50 c 0 -60 160 60 160 0 c 0 -60 -160 60 -160 0 z" />
      </image>
      <path
        id="Selection"
        stroke="black"
        stroke-width="1"
        d="M 815.00,625.00
           C 811.16,621.35 808.03,618.47 803.00,616.48
             787.58,610.36 775.20,622.95 769.46,636.00
             761.48,653.36 762.28,676.63 769.46,694.00
             775.01,706.76 786.66,716.92 801.00,716.92
             804.99,716.92 811.18,715.57 815.00,714.33
             824.19,711.34 840.28,701.01 842.17,691.00
             842.71,688.15 840.16,680.32 839.42,677.00
             837.69,669.15 836.01,657.98 836.00,650.00
             836.00,650.00 836.00,626.00 836.00,626.00
             836.03,607.57 842.13,581.92 849.43,565.00
             854.68,552.83 865.31,537.28 879.00,534.29
             885.67,532.83 891.67,532.60 896.66,538.11
             904.39,546.63 903.02,561.32 903.00,572.00
             902.97,591.96 893.56,621.64 885.58,640.00
             885.58,640.00 871.26,667.00 871.26,667.00
             870.90,669.12 870.96,672.74 871.26,675.00
             871.28,686.18 874.35,708.23 884.09,714.87
             896.27,723.17 913.20,709.47 920.24,700.00
             921.83,697.86 924.71,693.49 925.46,691.00
             926.51,687.47 924.07,679.41 924.00,674.00
             924.00,674.00 924.00,660.00 924.00,660.00
             924.11,651.09 927.39,639.95 931.37,632.00
             940.80,613.14 956.98,602.77 978.00,603.00
             999.18,603.24 1014.46,619.66 1011.58,641.00
             1010.52,648.79 1010.07,651.69 1006.69,659.00
             1003.39,666.14 998.90,671.63 993.00,676.82
             983.41,685.26 975.61,686.64 964.00,690.00
             969.53,699.71 972.38,707.24 983.00,713.10
             1001.45,723.27 1030.10,709.66 1036.00,696.00
             1037.56,692.40 1035.06,681.84 1035.00,677.00
             1035.00,677.00 1035.00,642.00 1035.00,642.00
             1035.00,642.00 1036.91,615.00 1036.91,615.00
             1036.91,615.00 1040.00,574.00 1040.00,574.00
             1040.00,574.00 1076.00,574.00 1076.00,574.00
             1076.00,574.00 1073.00,603.00 1073.00,603.00
             1073.00,603.00 1107.00,603.00 1107.00,603.00
             1107.00,603.00 1106.00,612.00 1106.00,612.00
             1106.00,612.00 1073.00,612.00 1073.00,612.00
             1073.00,612.00 1071.00,639.00 1071.00,639.00
             1071.00,639.00 1070.00,660.00 1070.00,660.00
             1070.00,660.00 1071.17,693.00 1071.17,693.00
             1072.15,702.64 1075.09,718.56 1088.00,717.29
             1097.13,716.39 1104.89,710.51 1110.91,704.00
             1112.69,702.07 1116.10,698.11 1116.75,695.58
             1116.75,695.58 1115.00,675.00 1115.00,675.00
             1115.00,675.00 1115.00,642.00 1115.00,642.00
             1115.00,642.00 1115.91,630.00 1115.91,630.00
             1115.91,630.00 1117.83,601.00 1117.83,601.00
             1117.83,601.00 1120.00,574.00 1120.00,574.00
             1120.00,574.00 1156.00,574.00 1156.00,574.00
             1156.00,574.00 1153.00,603.00 1153.00,603.00
             1153.00,603.00 1187.00,603.00 1187.00,603.00
             1187.00,603.00 1186.00,612.00 1186.00,612.00
             1186.00,612.00 1153.00,612.00 1153.00,612.00
             1151.19,634.29 1149.74,656.59 1150.00,679.00
             1150.00,679.00 1150.83,688.00 1150.83,688.00
             1151.79,697.63 1152.49,715.51 1165.00,717.30
             1175.60,718.81 1188.44,707.80 1194.24,700.00
             1195.88,697.79 1198.68,693.68 1199.17,691.00
             1199.67,688.27 1197.72,682.31 1197.14,679.00
             1197.14,679.00 1197.14,662.00 1197.14,662.00
             1197.05,630.95 1218.34,602.63 1251.00,603.00
             1255.71,603.06 1260.59,603.75 1265.00,605.47
             1287.81,614.34 1288.28,642.22 1278.73,661.00
             1269.30,679.54 1255.42,684.66 1237.00,690.00
             1241.91,698.63 1243.58,703.99 1252.00,710.47
             1266.79,721.87 1287.67,716.45 1300.99,705.38
             1304.96,702.07 1308.82,697.41 1311.53,693.00
             1313.00,690.63 1315.16,685.36 1317.39,684.03
             1319.42,682.88 1323.60,683.81 1326.00,684.03
             1324.47,689.36 1322.43,692.31 1319.60,697.00
             1316.98,701.34 1314.54,705.28 1310.91,708.91
             1298.85,720.97 1278.90,727.97 1262.00,728.00
             1262.00,728.00 1248.00,728.00 1248.00,728.00
             1241.41,727.92 1234.02,726.18 1228.00,723.49
             1215.91,718.08 1212.03,711.35 1204.00,702.00
             1199.18,713.30 1183.01,724.92 1171.00,727.48
             1167.50,728.23 1158.94,728.04 1155.00,728.00
             1141.32,727.84 1126.41,720.84 1122.00,707.00
             1113.38,715.62 1106.82,722.14 1095.00,726.30
             1088.50,728.59 1082.78,728.03 1076.00,728.00
             1059.80,727.92 1047.75,721.11 1041.00,706.00
             1027.23,719.46 1009.46,727.91 990.00,728.00
             990.00,728.00 976.00,728.00 976.00,728.00
             968.58,727.96 960.70,726.29 954.00,723.02
             943.13,717.72 937.56,710.75 931.00,701.00
             924.88,712.88 910.24,724.66 897.00,727.48
             891.12,728.74 887.68,727.10 881.00,729.00
             893.24,734.94 888.12,750.08 876.00,750.53
             866.80,750.87 860.72,741.24 865.17,733.09
             867.06,729.65 870.55,728.32 874.00,727.00
             859.19,719.98 854.96,713.83 847.00,700.00
             843.38,709.25 834.30,714.85 826.00,719.57
             820.43,722.74 814.28,724.92 808.00,726.19
             802.02,727.41 798.13,727.99 792.00,728.00
             774.05,728.03 763.31,728.83 748.00,717.10
             742.90,713.19 738.35,708.01 736.00,702.00
             736.00,702.00 734.00,702.00 734.00,702.00
             728.77,712.66 718.85,721.89 709.00,728.31
             705.84,730.37 694.45,736.30 692.93,738.39
             691.24,740.73 691.02,745.13 690.58,748.00
             690.58,748.00 687.13,765.00 687.13,765.00
             681.49,787.55 671.84,807.78 650.00,818.73
             640.62,823.43 632.29,825.06 622.00,826.16
             598.32,828.70 572.60,824.27 564.72,798.00
             563.20,792.94 562.89,790.26 563.01,785.00
             563.12,780.28 564.11,775.45 565.70,771.00
             572.30,752.53 591.93,741.23 611.00,741.00
             611.00,741.00 632.00,740.00 632.00,740.00
             632.00,740.00 648.00,738.27 648.00,738.27
             650.07,737.96 652.83,737.80 654.40,736.26
             656.57,734.13 655.94,728.91 656.01,726.00
             656.23,716.95 658.32,710.56 656.01,701.00
             651.45,707.96 647.41,714.24 640.00,718.65
             625.15,727.47 598.74,725.34 585.01,715.07
             580.07,711.38 577.38,707.02 574.00,702.00
             569.58,710.24 562.83,714.42 555.00,718.99
             539.28,728.17 525.43,728.03 508.00,728.00
             502.73,727.99 500.19,727.86 495.00,726.52
             487.37,724.56 478.88,720.03 473.09,714.70
             457.62,700.47 455.77,682.59 456.00,663.00
             456.37,631.80 481.14,603.37 513.00,603.00
             522.52,602.89 532.48,604.38 541.00,608.89
             550.64,613.99 551.88,617.59 543.00,625.00
             539.16,621.35 536.03,618.47 531.00,616.48
             515.22,610.21 502.54,623.58 496.87,637.00
             487.14,660.06 490.42,702.24 516.00,714.09
             530.40,720.75 549.99,714.27 560.99,703.91
             563.47,701.57 568.79,695.64 569.77,692.42
             569.77,692.42 567.14,671.00 567.14,671.00
             567.14,671.00 567.14,639.00 567.14,639.00
             567.14,639.00 568.83,614.00 568.83,614.00
             569.06,611.69 568.75,607.38 570.17,605.57
             571.74,603.59 575.70,604.00 578.00,604.00
             578.00,604.00 607.00,604.00 607.00,604.00
             607.00,604.00 605.00,638.00 605.00,638.00
             604.98,653.34 604.27,668.81 606.75,684.00
             608.35,693.77 611.55,708.17 622.00,712.11
             635.07,717.04 644.03,701.07 647.12,691.00
             654.26,667.65 653.00,630.94 653.00,606.00
             653.00,606.00 694.00,606.00 694.00,606.00
             694.00,606.00 694.00,710.00 694.00,710.00
             694.00,710.00 693.00,725.00 693.00,725.00
             705.68,717.70 724.48,705.79 729.00,691.00
             730.25,686.89 728.58,683.16 728.08,679.00
             728.08,679.00 728.08,665.00 728.08,665.00
             728.03,645.87 736.45,627.70 751.00,615.30
             764.34,603.93 783.16,600.66 800.00,604.42
             805.91,605.75 810.83,607.36 816.00,610.62
             817.95,611.85 820.69,613.51 820.98,616.04
             821.36,619.43 817.32,623.06 815.00,625.00 Z
           M 411.00,540.53
           C 420.13,539.04 429.05,540.22 435.79,547.18
             450.97,562.86 437.33,588.44 416.00,586.82
             402.19,585.77 393.00,576.99 393.00,563.00
             393.00,556.72 393.84,552.90 398.21,548.04
             401.87,543.98 405.87,542.05 411.00,540.53 Z
           M 892.12,544.00
           C 887.39,548.84 885.26,559.45 883.63,566.00
             879.22,583.70 875.78,604.84 873.84,623.00
             873.16,629.33 870.82,642.51 873.00,648.00
             883.64,621.40 887.68,606.21 892.12,578.00
             893.82,568.29 895.79,553.12 892.12,544.00 Z
           M 249.00,544.00
           C 256.73,545.88 275.04,544.90 284.00,545.00
             284.00,545.00 298.00,546.00 298.00,546.00
             312.00,546.07 326.27,548.91 339.00,554.89
             360.66,565.07 373.56,589.09 359.45,611.00
             352.30,622.10 343.41,626.62 332.00,632.00
             358.49,634.39 396.90,658.97 385.90,690.00
             384.60,693.66 382.45,696.93 380.10,700.00
             376.39,704.84 373.02,707.31 368.00,710.64
             336.80,731.35 282.57,727.00 246.00,727.00
             246.00,727.00 246.00,666.00 246.00,666.00
             246.00,666.00 247.00,649.00 247.00,649.00
             247.00,649.00 247.00,608.00 247.00,608.00
             247.00,608.00 248.00,593.00 248.00,593.00
             248.00,593.00 248.00,565.00 248.00,565.00
             248.00,565.00 249.00,544.00 249.00,544.00 Z
           M 290.00,556.00
           C 290.00,556.00 289.00,574.00 289.00,574.00
             289.00,574.00 288.00,591.00 288.00,591.00
             288.00,591.00 288.00,627.00 288.00,627.00
             314.31,625.77 330.07,595.51 317.12,573.00
             309.73,560.15 302.31,560.07 290.00,556.00 Z
           M 396.00,605.00
           C 396.00,605.00 416.00,604.00 416.00,604.00
             416.00,604.00 436.00,604.00 436.00,604.00
             436.00,604.00 435.00,648.00 435.00,648.00
             435.00,648.00 434.00,665.00 434.00,665.00
             434.00,665.00 434.00,684.00 434.00,684.00
             434.00,684.00 433.00,700.00 433.00,700.00
             433.00,700.00 433.00,727.00 433.00,727.00
             433.00,727.00 401.00,727.00 401.00,727.00
             399.34,727.00 395.85,727.14 394.43,726.43
             390.32,724.36 392.95,714.04 393.00,710.00
             393.00,710.00 393.00,677.00 393.00,677.00
             393.00,677.00 394.00,660.00 394.00,660.00
             394.00,660.00 395.00,619.00 395.00,619.00
             395.00,619.00 396.00,605.00 396.00,605.00 Z
           M 961.00,678.00
           C 982.45,674.70 997.66,658.87 998.91,637.00
             999.24,631.13 997.09,622.39 992.79,618.23
             986.85,612.47 977.46,614.84 972.09,620.10
             964.14,627.91 960.92,641.23 959.93,652.00
             958.89,663.18 958.99,666.76 961.00,678.00 Z
           M 1234.00,678.00
           C 1255.45,674.70 1270.66,658.87 1271.91,637.00
             1272.24,631.13 1270.09,622.39 1265.79,618.23
             1259.85,612.47 1250.46,614.84 1245.09,620.10
             1237.14,627.91 1233.92,641.23 1232.93,652.00
             1231.89,663.18 1231.99,666.76 1234.00,678.00 Z
           M 287.00,716.00
           C 301.40,714.83 318.38,710.60 328.70,699.83
             344.00,683.87 339.75,662.44 323.00,649.53
             312.85,641.71 299.51,639.00 287.00,639.00
             287.00,639.00 287.00,716.00 287.00,716.00 Z
           M 955.00,798.03
           C 951.06,809.29 943.93,818.67 931.00,818.99
             917.97,819.30 911.80,811.86 908.03,800.00
             903.24,784.95 903.92,761.03 908.75,746.00
             911.49,737.44 918.45,723.92 929.00,724.20
             939.13,724.46 938.53,740.00 937.58,747.00
             936.12,757.67 933.82,766.07 929.57,776.00
             929.57,776.00 922.66,790.00 922.66,790.00
             921.44,794.42 923.78,806.22 926.65,809.89
             932.81,817.78 942.06,809.80 946.20,804.00
             947.32,802.44 949.00,798.96 950.49,798.03
             952.16,797.07 953.33,797.65 955.00,798.03 Z
           M 933.00,731.00
           C 933.00,731.00 931.00,731.00 931.00,731.00
             927.75,742.14 925.24,753.45 923.98,765.00
             923.43,769.67 922.20,773.46 923.98,778.00
             923.98,778.00 927.71,766.00 927.71,766.00
             931.18,754.22 933.00,743.29 933.00,731.00 Z
           M 655.00,748.00
           C 648.93,749.49 635.31,750.99 629.00,751.00
             618.55,751.02 606.38,751.08 597.00,756.12
             577.38,766.68 572.21,796.38 591.00,810.44
             598.85,816.31 610.76,817.01 620.00,814.76
             625.12,813.51 629.94,811.01 633.91,807.53
             639.76,802.41 643.43,795.13 646.19,788.00
             651.70,773.77 653.04,762.84 655.00,748.00 Z
           M 732.96,759.00
           C 732.96,759.00 753.00,758.00 753.00,758.00
             753.00,758.00 754.00,771.00 754.00,771.00
             760.10,759.74 776.87,756.36 786.98,764.39
             792.72,768.95 794.47,774.52 797.00,781.00
             798.70,774.71 801.54,768.53 807.01,764.65
             816.41,757.98 832.15,760.49 838.61,770.04
             846.94,782.33 845.00,804.50 845.00,819.00
             845.00,819.00 825.00,819.00 825.00,819.00
             825.00,807.27 825.89,789.98 823.55,779.00
             822.62,774.64 820.01,766.19 814.00,767.84
             809.13,769.19 805.73,775.62 804.06,780.00
             799.60,791.75 799.65,806.53 798.00,819.00
             798.00,819.00 778.00,819.00 778.00,819.00
             778.00,819.00 779.00,805.00 779.00,805.00
             779.08,797.64 778.57,787.16 777.20,780.00
             776.40,775.84 775.18,769.23 770.90,767.27
             765.08,764.60 759.67,772.62 757.67,777.00
             751.64,790.16 752.00,804.89 752.00,819.00
             752.00,819.00 732.75,818.01 732.75,818.01
             732.75,818.01 731.81,813.00 731.81,813.00
             731.81,813.00 731.81,783.00 731.81,783.00
             731.81,783.00 732.96,771.00 732.96,771.00
             732.96,771.00 732.96,759.00 732.96,759.00 Z
           M 864.96,759.00
           C 864.96,759.00 885.00,758.00 885.00,758.00
             885.00,758.00 885.00,774.00 885.00,774.00
             885.00,774.00 884.00,790.00 884.00,790.00
             884.00,790.00 884.00,819.00 884.00,819.00
             884.00,819.00 864.75,818.01 864.75,818.01
             864.75,818.01 863.81,813.00 863.81,813.00
             863.81,813.00 863.81,783.00 863.81,783.00
             863.81,783.00 864.96,771.00 864.96,771.00
             864.96,771.00 864.96,759.00 864.96,759.00 Z
           M 1040.96,759.00
           C 1040.96,759.00 1061.00,758.00 1061.00,758.00
             1061.00,758.00 1062.00,771.00 1062.00,771.00
             1069.80,756.62 1091.20,756.48 1100.04,770.00
             1107.83,781.93 1107.82,805.20 1106.00,819.00
             1106.00,819.00 1086.00,819.00 1086.00,819.00
             1086.00,819.00 1087.00,805.00 1087.00,805.00
             1087.08,797.64 1086.57,787.16 1085.20,780.00
             1084.40,775.84 1083.18,769.23 1078.90,767.27
             1073.08,764.60 1067.67,772.62 1065.67,777.00
             1059.64,790.16 1060.00,804.89 1060.00,819.00
             1060.00,819.00 1040.75,818.01 1040.75,818.01
             1040.75,818.01 1039.81,813.00 1039.81,813.00
             1039.81,813.00 1039.81,783.00 1039.81,783.00
             1039.81,783.00 1040.96,771.00 1040.96,771.00
             1040.96,771.00 1040.96,759.00 1040.96,759.00 Z
           M 1167.00,759.00
           C 1167.00,759.00 1187.00,759.00 1187.00,759.00
             1187.00,759.00 1188.00,780.00 1188.00,780.00
             1188.00,780.00 1188.00,799.00 1188.00,799.00
             1188.00,799.00 1187.00,817.00 1187.00,817.00
             1191.76,814.07 1196.01,811.32 1199.67,806.99
             1204.58,801.18 1203.87,796.51 1211.00,798.00
             1208.49,805.18 1204.92,811.42 1198.96,816.33
             1195.96,818.80 1188.52,822.77 1187.01,825.21
             1185.90,827.00 1184.59,835.20 1183.85,838.00
             1181.01,848.64 1177.17,857.22 1167.00,862.68
             1152.22,870.61 1125.89,869.94 1123.31,849.00
             1122.86,845.29 1123.79,841.34 1125.40,838.00
             1130.96,826.46 1140.65,825.26 1152.00,824.99
             1163.03,824.71 1171.95,824.06 1168.00,810.00
             1163.27,819.45 1148.81,820.11 1140.00,816.52
             1136.17,814.96 1132.56,812.11 1130.05,808.83
             1122.07,798.40 1123.56,780.08 1131.53,770.01
             1140.11,759.16 1156.02,756.25 1167.00,765.00
             1167.00,765.00 1167.00,759.00 1167.00,759.00 Z
           M 1257.00,759.00
           C 1257.00,759.00 1276.00,759.00 1276.00,759.00
             1276.00,759.00 1274.32,797.00 1274.32,797.00
             1274.80,803.39 1275.91,814.41 1285.00,813.21
             1294.13,812.01 1299.48,799.49 1301.63,797.99
             1303.02,797.03 1304.43,797.12 1306.00,797.00
             1304.23,813.65 1285.23,823.75 1270.00,817.52
             1264.18,815.14 1262.52,811.76 1259.00,807.00
             1256.71,811.25 1254.44,814.09 1250.00,816.31
             1240.73,820.96 1226.46,818.00 1219.52,810.56
             1208.42,798.68 1211.51,775.39 1224.01,765.53
             1228.52,761.97 1233.29,760.29 1239.00,760.04
             1247.05,759.69 1251.49,760.87 1257.00,767.00
             1257.00,767.00 1257.00,759.00 1257.00,759.00 Z
           M 984.00,760.46
           C 989.85,759.65 996.36,759.64 1002.00,761.52
             1019.47,767.34 1026.52,787.39 1016.88,803.00
             1010.51,813.31 998.95,818.71 987.00,818.26
             981.33,818.04 976.03,817.52 971.00,814.64
             956.02,806.05 953.62,785.23 963.93,772.09
             969.21,765.35 975.86,762.27 984.00,760.46 Z
           M 988.02,766.47
           C 976.94,770.85 976.94,791.25 979.48,801.00
             980.72,805.78 983.76,813.14 989.99,812.14
             994.67,811.38 997.31,806.06 998.67,802.00
             1000.97,794.13 1001.25,783.88 998.67,776.00
             996.96,770.18 994.60,766.16 988.02,766.47 Z
           M 1154.00,766.60
           C 1143.65,772.14 1141.54,790.47 1143.82,801.00
             1145.36,808.12 1149.65,815.01 1158.00,811.85
             1170.59,807.08 1169.26,788.64 1166.52,778.00
             1164.75,771.11 1162.23,765.13 1154.00,766.60 Z
           M 1242.00,766.60
           C 1231.65,772.14 1229.54,790.47 1231.82,801.00
             1233.54,808.94 1238.11,815.14 1247.00,811.66
             1257.74,807.45 1257.01,797.39 1257.00,788.00
             1256.99,783.66 1257.13,781.17 1255.53,777.00
             1252.99,770.36 1249.83,765.18 1242.00,766.60 Z
           M 1168.00,829.00
           C 1161.83,830.11 1145.02,830.64 1141.00,832.57
             1132.79,836.51 1128.89,848.34 1134.65,855.90
             1140.11,863.06 1152.45,862.50 1158.53,856.52
             1161.39,853.72 1162.78,850.67 1164.18,847.00
             1166.23,841.64 1167.24,834.73 1168.00,829.00 Z"
      />
    </svg>
  );
}
